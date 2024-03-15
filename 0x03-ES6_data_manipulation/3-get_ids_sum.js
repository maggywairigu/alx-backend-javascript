/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *  id: Number,
 *  firstName: String,
 *  location: String
 * }[]} students - The list of students.
 * @returns
 */
export default function getStudentIdsSum(students) {
    if (students instanceof Array) {
        return students.reduce(
            (prev, cur) => prev.id || prev + cur.id, 0
        )
    }
    return 0;
}