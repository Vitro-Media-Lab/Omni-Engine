import { execFileSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

function git(...args) {
    execFileSync('git', args, { cwd: dist, stdio: 'inherit' });
}

const remote = execFileSync('git', ['remote', 'get-url', 'origin'], {
    cwd: root,
    encoding: 'utf8',
}).trim();

// Fresh orphan repo in dist every time — avoids the gh-pages package's
// "git rm --cached file1 file2 ..." pattern that overflows Windows's
// CreateProcess argument-length limit, and avoids storing large GeoJSON
// blobs in git history on the gh-pages branch.
if (existsSync(resolve(dist, '.git'))) {
    rmSync(resolve(dist, '.git'), { recursive: true, force: true });
}

git('init', '-b', 'gh-pages');
git('add', '-A');
git('commit', '-m', 'Deploy');
git('remote', 'add', 'origin', remote);
git('push', '--force', 'origin', 'gh-pages');

console.log('\nDeployed to gh-pages branch.');
