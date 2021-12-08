const days = {
    dom: 1 as const,
    lun: 2 as const,
    mar: 4 as const,
    mer: 8 as const,
    gio: 16 as const,
    ven: 32 as const,
    sab: 64 as const,
}
type Days = typeof days
type KeysOf<T> = Array<keyof T>

export const toggleDay = (day: keyof Days) => (state: number) => {
    return state ^ days[day]
}

const isDayPresent = (day: keyof Days) => (state: number) => {
    return (state & days[day]) !== 0
}

function getTypedKeys<T>(obj: T): KeysOf<T> {
    return Object.keys(obj) as KeysOf<T>
}

export const decode = (state: number) => {
    return getTypedKeys(days).reduce((acc, day) => {
        return isDayPresent(day)(state) ? [...acc, day] : acc;
    }, [] as KeysOf<Days>)
}