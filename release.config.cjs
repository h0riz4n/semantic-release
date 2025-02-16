const { generateVersionEnv: generateVersionEnv } = require('./create-version.js');

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: [
        {
            name: "main",
            channel: "stable",
            prerelease: false
        },
        {
            name: "dev",
            channel: "dev",
            prerelease: false
        }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/exec",
            {
                "verifyReleaseCmd": "mvn clean versions:set -DnewVersion=${nextRelease.version} -DgenerateBackupPoms=false"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ["pom.xml", "CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version} [skip ci]"
            }
        ],
        {
            analyzeCommits: generateVersionEnv
        },
        ...(process.env.CI_COMMIT_BRANCH === "refs/heads/main" ? ["@semantic-release/github"] : [])
    ]
};
