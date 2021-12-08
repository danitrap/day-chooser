
import * as DayChooser from "./DayChooser"
describe("DayChooser", () => {
    describe("toggleDay", () => {
        let initialState = 0;

        test("it adds a single day", () => {
            let result = DayChooser.toggleDay("mar")(initialState)
            expect(result).toBe(4)
        })

        test("it correctly adds more than one day", () => {
            let result = DayChooser.toggleDay("lun")(initialState)
            result = DayChooser.toggleDay("mar")(initialState)
            expect(result).toBe(4)
        })

        test("it toggles a day", () => {
            let result = DayChooser.toggleDay("lun")(initialState)
            result = DayChooser.toggleDay("lun")(result)
            expect(result).toBe(0)
        })

        test("when given null it doesn't do anything", () => {
            //@ts-expect-error
            let result = DayChooser.toggleDay(null)(initialState)
            expect(result).toBe(0)
        })
    })

    describe("daysReducer", () => {
        test.each<number>([0, NaN, Infinity, -Infinity])('test with invalid parameter %i', (v: number) => expect(DayChooser.decode(v)).toStrictEqual([]))

        test("it decodes one day", () => {
            expect(DayChooser.decode(1)).toStrictEqual(['dom'])
        })
        test("it decodes a combination of days", () => {
            expect(DayChooser.decode(3)).toStrictEqual(['dom', 'lun'])
        })
    })

})