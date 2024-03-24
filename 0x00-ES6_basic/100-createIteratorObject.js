export default function createIteratorObject(report) {
    const workers = [];
    for (const employees of Object.values(report.allEmployees)) {
        for (const employee of employees) {
            workers.push(employee);
        }
    }
    return workers;
}
