export function isValidEmail(
    email: string
): boolean {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


export function isNonEmptyString(
    value: unknown
): value is string {

    return (
        typeof value === 'string' &&
        value.trim().length > 0
    );

}