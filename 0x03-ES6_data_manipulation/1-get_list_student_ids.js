/**
 * Retrieves ids from a list of students.
 * @param {{
 *  id: Number,
 *  firstName: String,
 *  location: String
 * }[]} students - The list of students
 * @returns
 */
export default function getListStudentsId(students) {
    if (students instanceof Array) {
        return students.map((student) => student.id);
    }
    return [];
}