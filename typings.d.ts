interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Experience extends SanityBody {
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
}

export interface Project extends SanityBody {
    _type: 'project';
    image: Image;
    linkToBuild: string;
    summary: string;
    title: string;
    technologies: Skill[];
}

export interface Skill extends SanityBody {
    _type: 'skill';
    progress: number;
    title: string;
    image: Image;
}

export interface Social extends SanityBody {
    _type: 'social';
    url: string;
    title: string;
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    socials: Social[];
}
