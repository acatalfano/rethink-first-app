export class ResourceCounter {
    private pendingResources: number = 0;

    public readonly resourcesArePending = (): boolean => this.pendingResources > 0;

    public acquireResource(): void {
        this.pendingResources += 1;
    }

    public releaseResource(): void {
        this.pendingResources = Math.max(--this.pendingResources, 0);
    }
}
