export interface DictLinks {
    hello: string;
    aboutMe: string;
    skills: string;
    portfolio: string;
    getInTouch: string;
}

export interface DictHello {
    name: string;
    job: string;
    aboutMeButton: string;
    getInTouchButton: string;
}

export interface DictAboutMe {
    title: string;
    text: string;
}

export interface DictSkill {
    name: string;
    description: string
}

export interface DictSkillDiv {
    name: string,
    skills: DictSkill[];
}

export interface DictSkills {
    title: string,
    skillDivs: DictSkillDiv[]
}

export interface DictPortfolio {
    title: string;
    viewButton: string;
    viewMoreButton: string;
    from: string
    to: string;
}

export interface DictGetInTouch {
    title: string;
    sendButton: string;
    writeDirectly: string;
    label1: {
        name: string;
        placeholder: string;
    };
    label2: {
        name: string;
        placeholder: string;
    };
}

export interface Dict {
    links: DictLinks;
    hello: DictHello;
    aboutMe: DictAboutMe;
    skills: DictSkills;
    portfolio: DictPortfolio;
    getInTouch: DictGetInTouch;
}