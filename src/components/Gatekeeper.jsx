import React, { useEffect, useState } from 'react';
import { checkSubscription } from '../services/auth.js';
import Paywall from './Paywall.jsx';

// Three gate states:
//   'loading'  — verifying token against the API
//   'denied'   — no token, expired token, or no active subscription
//   'approved' — valid token + active subscription

export default function Gatekeeper({ children }) {
    const [gate, setGate] = useState('loading');

    useEffect(() => {
        checkSubscription().then(result => {
            setGate(result === 'approved' ? 'approved' : 'denied');
        });
    }, []);

    if (gate === 'loading') return <LoadingScreen />;
    if (gate === 'denied')  return <Paywall onApproved={() => setGate('approved')} />;
    return children;
}

function LoadingScreen() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-zinc-700 border-t-zinc-300 animate-spin" />
                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                    Verifying access
                </p>
            </div>
        </div>
    );
}
