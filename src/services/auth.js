const API = import.meta.env.VITE_WP_API_URL;
const TOKEN_KEY = 'vitro_jwt';

// ── Token storage ─────────────────────────────────────────────────────────────

export const getToken  = ()      => localStorage.getItem(TOKEN_KEY);
export const setToken  = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = ()     => localStorage.removeItem(TOKEN_KEY);

// ── Login ─────────────────────────────────────────────────────────────────────

/**
 * Exchange credentials for a JWT.
 * Resolves with the token string on success.
 * Rejects with a human-readable error string on failure.
 */
export async function loginUser(username, password) {
    const res = await fetch(`${API}/wp-json/jwt-auth/v1/token`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ username, password }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        const raw = data?.message ?? 'Login failed. Check your credentials.';
        throw new Error(raw.replace(/<[^>]*>/g, ''));
    }

    const token = data.token ?? data.data?.token;
    if (!token) throw new Error('Server returned no token.');

    setToken(token);
    return token;
}

// ── Subscription check ────────────────────────────────────────────────────────

/**
 * Verify the stored JWT and check whether the account has an active subscription.
 *
 * Returns:  'approved' | 'no_subscription' | 'unauthenticated'
 *
 * 'unauthenticated'  — no token, or token rejected (expired / invalid)
 * 'no_subscription'  — token valid but subscription lapsed / not purchased
 * 'approved'         — token valid + active subscription
 */
export async function checkSubscription() {
    const token = getToken();
    if (!token) return 'unauthenticated';

    let res;
    try {
        res = await fetch(`${API}/wp-json/vitro/v1/check-access`, {
            method:  'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch {
        // Network failure — treat as unauthenticated so the paywall shows
        // rather than silently blocking an otherwise-valid session.
        return 'unauthenticated';
    }

    if (res.status === 401 || res.status === 403) {
        clearToken();
        return 'unauthenticated';
    }

    if (!res.ok) return 'no_subscription';

    const data = await res.json().catch(() => ({}));
    return Array.isArray(data.entitlements) && data.entitlements.includes('ENGINE-ACCESS')
        ? 'approved'
        : 'no_subscription';
}
