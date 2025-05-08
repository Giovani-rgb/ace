export class AuthModel {
  constructor(data) {
    this.accessToken = data.accessToken || null;
    this.user = data.user || {};
  }

  isValid() {
    return this.accessToken && this.user.username;
  }
}
