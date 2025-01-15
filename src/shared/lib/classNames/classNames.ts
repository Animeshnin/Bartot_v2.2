export type Mode = Record<string, string | boolean | undefined>;

export function classNames(cls: string, mode: Mode, additional: Array<string | undefined> = []): string {

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)

    ].join(' ');
}
