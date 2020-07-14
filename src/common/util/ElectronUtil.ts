import isElectron from 'is-electron'
const process = (global as any).process


export function isMainProcess(): boolean {
    if (!isElectron()) {
        return true
    }
    return process && process.type === 'browser'
}

export function isRendererProcess(): boolean {
    if (!isElectron()) {
        return true
    }
    return process && process.type === 'renderer'
}

export function assertMainProcess() {
    if (!isMainProcess()) {
        throw new Error('Expected to run in main process')
    }
}

export function assertRendererProcess() {
    if (!isRendererProcess()) {
        throw new Error('Expected to run in renderer process')
    }
}
