export default function uploadPhoto(filename) {
    const file = filename;
    return new Promise((resolve, reject) => {
	reject(`${file} cannot be processed`)
    })
}
