export interface IFileLoadProps {
  description: string;
}

export interface IFileLoadState {
  status1: string[];
  status2: string[];
  siteUrl: string;
  webUrl: string;
  folder: string;
  folderUrl: string;
  file: string;
  serverRelativePath: string;
}
