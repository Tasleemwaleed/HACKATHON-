interface PersonalInfo {
    name: string;
    contactNumber: string;
    details: string;
    profilePicture: string;
}

interface Education {
    school: string;
    fieldOfStudy: string;
    year: number;
}

interface Skill {
    name: string;
    description: string;
}

interface WorkExperience {
    yearsOfExperience: number;
    currentJob: string;
}

let personalInfo: PersonalInfo = {
    name: 'Tasleem Waleed',
    contactNumber: '0309-0215236',
    details: 'HI i am Tasleem Waleed i am the student in Governor house batch Quarter 2',
    profilePicture: ''
};

let education: Education[] = [
    {
        school: 'Karachi high school',
        fieldOfStudy: 'Computer science',
        year: 2004
    },
    {
        school: 'Zamzama college',
        fieldOfStudy: '',
        year: 0
    },
    {
        school: 'University of Karachi',
        fieldOfStudy: 'Bachelor of Commerce',
        year: 0