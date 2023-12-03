import { cookies } from "next/headers";
import { getIronSession, SessionOptions } from 'iron-session';

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  branchId: number;
  userRoleId: number;
}

export const defaultSession: SessionData = {
  username: '',
  isLoggedIn: false,
  branchId: 0,
  userRoleId: 0,
};

export class UserSession{

    private sessionData: SessionData;
    private sessionOptions: SessionOptions;
    constructor() {
        this.sessionData = defaultSession;
        this.sessionOptions = {
          password: "1RzPwjgMBWzxEWw70dGupXs4KfDoV5uTiZ6QXZ6QXZ6Q=",
          cookieName: 'app_inventory',
          cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
          },
        };
        
    }

    public async setSessionData(sessionData:SessionData){
      const session = await getIronSession<SessionData>(cookies(),this.sessionOptions);
      session.username = sessionData.username;
      session.isLoggedIn = sessionData.isLoggedIn;
      session.branchId = sessionData.branchId;
      session.userRoleId = sessionData.userRoleId;
      this.sessionData = sessionData;
      await session.save();
    }

    public async getSessionData():Promise<SessionData>{   
        const session = await getIronSession<SessionData>(cookies(),this.sessionOptions);
        return session;
    }

    public isUserLoggedIn():boolean{
        return this.sessionData.isLoggedIn;
    }

    public getBranchId():number{
        return this.sessionData.branchId;
    }

    public getUserRoleId():number{
        return this.sessionData.userRoleId;
    }

    public getUsername():string{
        return this.sessionData.username;
    }

    public clearSessionData(){
        this.sessionData = defaultSession;
    }

}



