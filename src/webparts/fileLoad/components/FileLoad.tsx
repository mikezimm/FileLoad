import * as React from 'react';
import styles from './FileLoad.module.scss';
import { IFileLoadProps, IFileLoadState } from './IFileLoadProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { loadHTMLFile1,loadHTMLFile2 } from './LoadHTML';
import { Site } from '@pnp/sp/sites';

export default class FileLoad extends React.Component<IFileLoadProps, IFileLoadState > {

  public constructor(props:IFileLoadProps){
    super(props);
    // let web = `${window.location.hostname}/sites/TenantCDN/SecureScriptSample`;
    const siteUrl = `/sites/TenantCDN/`;
    const webUrl = `/sites/TenantCDN/SecureScriptSample`;
    const folder = `Project1`;

    const file = 'Example_txt.txt';
    const folderUrl = `${webUrl}/${folder}`;
    const serverRelativePath = `${webUrl}/${folder}/${file}`;

    this.state = { 
      status1: ['waiting'],
      status2: ['waiting'],
      siteUrl: siteUrl,
      webUrl: webUrl,
      folder: folder,
      folderUrl: folderUrl,
      file: file,
      serverRelativePath: serverRelativePath ,
    };

  }


  
    /***
     *     .o88b.  .d88b.  .88b  d88. d8888b.      d8888b. d888888b d8888b.      .88b  d88.  .d88b.  db    db d8b   db d888888b 
     *    d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D      88  `8D   `88'   88  `8D      88'YbdP`88 .8P  Y8. 88    88 888o  88 `~~88~~' 
     *    8P      88    88 88  88  88 88oodD'      88   88    88    88   88      88  88  88 88    88 88    88 88V8o 88    88    
     *    8b      88    88 88  88  88 88~~~        88   88    88    88   88      88  88  88 88    88 88    88 88 V8o88    88    
     *    Y8b  d8 `8b  d8' 88  88  88 88           88  .8D   .88.   88  .8D      88  88  88 `8b  d8' 88b  d88 88  V888    88    
     *     `Y88P'  `Y88P'  YP  YP  YP 88           Y8888D' Y888888P Y8888D'      YP  YP  YP  `Y88P'  ~Y8888P' VP   V8P    YP    
     *                                                                                                                          
     *                                                                                                                          
     */
  
  
     public async componentDidMount() {
      //Not using this function because it just did not want to work.
      let result1 = await loadHTMLFile1( this.state.folderUrl, this.state.file,  );
      let result2 = await loadHTMLFile2( this.state.siteUrl, this.state.webUrl, this.state.folderUrl, this.state.serverRelativePath, this.state.file,  );
      this.setState({ status1: result1, status2: result2 });
    }

  public render(): React.ReactElement<IFileLoadProps> {


    return (
      <div className={ styles.fileLoad }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>File Load status:</span>
              <br /><br />
              <a href={`${this.state.serverRelativePath}`} style={{color: 'white'}}>{`${this.state.serverRelativePath}`}</a>
              <br /><br />
              <span className={ styles.title }>{this.state.status1}</span>
              <br /><br />
              <span className={ styles.title }>{this.state.status2}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
