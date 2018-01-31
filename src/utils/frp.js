export function debounce(func, time = 1000) {
    let interval
    return function(...args) {
        clearTimeout(interval)
        interval = setTimeout(() => {
            interval = null
            return func.bind(this)(...args)
        }, time)
    }
}

export function distinctUntilChanged(func) {
    let previousArgs = []
    return function(...args) {
        if (previousArgs.length === args.length && previousArgs.every((x, i) => args[i] === x)) {
            return
        }
        previousArgs = args
        return func.bind(this)(...args)
    }
}

export function skip(func, values) {
    return function(...args) {
        if (values > 0) {
            return func.bind(this)(...args)
        }
        values -= 1
        return
    }
}

export function take(func, values) {
    return function(...args) {
        if (values <= 0) {
            return
        }
        values -= 1
        return func.bind(this)(...args)
    }
}

export function throttle(func, time) {
    let inThrottle
    return function(...args) {
        if (inThrottle) {
            return
        }
        inThrottle = true
        setTimeout(() => (inThrottle = false), time)
        return func.bind(this)(...args)
    }
}
