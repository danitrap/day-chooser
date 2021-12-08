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

export const toggleDay = (day: keyof Days) => (state: number) => {
    return state ^ days[day]
}

const isDayPresent = (day: keyof Days) => (state: number) => {
    return (state & days[day]) !== 0
}

export const daysReducer = (state: number) => {
    return Object.keys(days).reduce((acc, day) => {
        return isDayPresent(day as keyof Days)(state) ? [...acc, day] : acc;
    }, [] as string[])
}