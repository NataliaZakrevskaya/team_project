export type ProfileActionsTypes<T> = T extends { [ key: string ]: infer A } ? A : never