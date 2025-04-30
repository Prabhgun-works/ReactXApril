import { users } from './data';

export default function JsFunctions() {
    const name = users.map(user => user.name);
    console.log(name);

    const userCard = users.map(user => ({
        ...user, // corrected spread (was wrong: spreading users)
        title: `${user.name} and ${user.age}`,
    }));
    console.table(userCard); // Cleaner tabular console output
    console.log(userCard); // Proper expanded object output
    
    const filtered = users.filter(user => user.role === "Developer");
    console.log(filtered); 

    const seniorFilter = users.filter(user => user.role === "Developer" && user.age >= 20);
    console.log(seniorFilter); 

    const reducedData = users.reduce((acc, user) => user.age + acc, 0);
    console.log(reducedData);

    const reducer = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1; 
        return acc; 
    }, {});
    console.log(reducer);

    const seniorDev = users.find(user => user.role === "Developer" && user.age === 22); // fixed typo: "developer" to "Developer"
    console.log(seniorDev);

    const hasMinor = users.some(user => user.age <= 18);
    console.log(hasMinor);

    return (
        <div>
            {/* You might want to render something instead of an empty div */}
        </div>
    );
}
