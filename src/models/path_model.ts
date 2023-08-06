export default class PathModel {
  path: string | null;
  content: string | null;

  constructor(path: string | null, content: string | null) {
    this.path = path;
    this.content = content;
  }
}
