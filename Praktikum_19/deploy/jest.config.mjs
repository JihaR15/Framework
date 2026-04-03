import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './'
})

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/*.d.ts',
        '!src/pages/_app.tsx',
        '!src/pages/_document.tsx',
        '!**/jest.config.mjs',
        '!**/next.config.mjs',
        '!**/next.config.ts',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**',
        '!**/middleware.ts',
        '!**/middleware/**',
        '!**/utils/**',
        '!src/component/layouts/Appshell/**',
        '!src/pages/produk/server.tsx',
        '!src/pages/produk/static.tsx',
        '!src/pages/produk/*copy.tsx',
    ],
}

export default createJestConfig(config)