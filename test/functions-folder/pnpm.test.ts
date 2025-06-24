import {describe, expect, it} from 'vitest'
import invoke from '../utils/invoke.js'
import {existsSync} from 'node:fs'
import {join} from 'node:path'

describe('invoke functions folder', () => {
    describe('invoke pnpm folder', () => {
        it('should run local test typescript source', async () => {
            const resource = {
                name: 'typescript',
                type: 'sanity.function.document-publish',
                src: './functions-folder/pnpm/functions/typescript',
            }
            const response = await invoke(resource, {})

            // Should execute properly
            expect(response).toBeTruthy()

            const {logs} = response
            const plainLogs = JSON.stringify(logs, null, 2)

            expect(plainLogs).toBeTruthy()
            expect(plainLogs).toContain('functions-folder-pnpm-typescript')

            const buildPath = join(resource.src, '.build', `function-${resource.name}`)

            // Should be transpiled
            expect(existsSync(join(buildPath, 'index.js'))).toBe(true)
            expect(existsSync(join(buildPath, 'index.js.map'))).toBe(true)

            // Should be hydrated
            expect(existsSync(join(buildPath, 'node_modules', '@sanity', 'functions', 'package.json'))).toBe(true)
        })
        it('should run local test javascript source', async () => {
            const resource = {
                name: 'javascript',
                type: 'sanity.function.document-publish',
                src: './functions-folder/pnpm/functions/javascript',
            }
            const response = await invoke(resource, {})

            expect(response).toBeTruthy()

            const {logs} = response
            const plainLogs = JSON.stringify(logs, null, 2)

            expect(plainLogs).toBeTruthy()
            expect(plainLogs).toContain('functions-folder-pnpm-javascript')

            // Should not be transpiled
            expect(existsSync(join(resource.src, '.build'))).toBe(false)

            // Should be hydrated
            expect(existsSync(join(resource.src, 'node_modules', '@sanity', 'functions', 'package.json'))).toBe(true)
        })
    })
})
