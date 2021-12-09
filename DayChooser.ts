const days = {
    dom: 0b0000001,
    lun: 0b0000010,
    mar: 0b0000100,
    mer: 0b0001000,
    gio: 0b0010000,
    ven: 0b0100000,
    sab: 0b1000000,
} as const;

type Days = typeof days
type KeysOf<T> = Array<keyof T>

export const toggleDay = (day: keyof Days) => (state: number) => state ^ days[day]

const isDayPresent = (state: number) => (day: keyof Days) => (state & days[day]) !== 0

function typedKeys<T>(obj: T): KeysOf<T> {
    return Object.keys(obj) as KeysOf<T>
}

export const decode = (state: number) => typedKeys(days).filter(isDayPresent(state));
