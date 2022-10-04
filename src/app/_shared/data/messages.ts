export interface GroupAction {
    title: string;
    message: string;
    okButton?: {
        text?: string;
        color?: string;
    },
    cancelButton?: {
        text?: string;
        color?: string;
    }
}

export const Messages: Record<string, Record<string, GroupAction>> = {
    entity: {
        update: {
            title: 'Update entity',
            message: 'Confirm update?'
        },
        delete: {
            title: 'Delete entity',
            message: 'Are you sure you want to delete the entity?',
            okButton: {
                text: 'Delete',
                color: 'warn'
            }
        }
    }
};