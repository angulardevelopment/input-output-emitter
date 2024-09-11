import { Component, OnInit } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  companyData = "test";
  constructor(public oauthService: OAuthService) { }

  ngOnInit(): void {
    this.jhbub();
  }

  closePop(event){
    console.log('value from child component', event);
    }



      authCodeFlowConfig: AuthConfig = {
      // Url of the Identity Provider
      issuer: 'https://idsvr4.azurewebsites.net',
  
      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin + '/index.html',
  
      // The SPA's id. The SPA is registerd with this id at the auth-server
      // clientId: 'server.code',
      clientId: 'spa',
  
      // Just needed if your auth server demands a secret. In general, this
      // is a sign that the auth server is not configured with SPAs in mind
      // and it might not enforce further best practices vital for security
      // such applications.
      // dummyClientSecret: 'secret',
  
      responseType: 'code',
  
      // set the scope for the permissions the client should request
      // The first four are defined by OIDC.
      // Important: Request offline_access to get a refresh token
      // The api scope is a usecase specific one
      scope: 'openid profile email offline_access api',
  
      showDebugInformation: true,
    };


    hgvuy(){
      this.oauthService.initCodeFlow();
      this.oauthService.initLoginFlow();


    }

    jhbub(){
      this.oauthService.configure(this.authCodeFlowConfig);
this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }


    logoutt(){
      this.oauthService.logOut();
      this.oauthService.revokeTokenAndLogout();

    }
}
