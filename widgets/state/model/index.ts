export interface Props {
    data: {
        id?: string;
        title?: string;
        description?: string;
        image?: string;
        likes?: number;
        liked?: boolean;
        comments?: number;
    }
}