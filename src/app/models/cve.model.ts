export class CVE {

  constructor(
    public id: string, 
    public summary: string,
    public published: string,
    public isFavorite: boolean = false
  ) {}
}