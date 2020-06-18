import { Component, OnInit } from '@angular/core';
import { releases } from './download-count';
import * as _ from 'lodash';
@Component({
  selector: 'app-download-count',
  templateUrl: './download-count.component.html',
  styleUrls: ['./download-count.component.css']
})
export class DownloadCountComponent implements OnInit {


  releaseData: Array<{
    releaseName: string,
    mac: number,
    windows: number,
    linux: number,
    total: number,
    autoUpdate: number,
    grandTotal: number
    publishedDate: string,
  }>;

  constructor() { }

  ngOnInit(): void {
    this.releaseData = new Array();
    releases.forEach(release => {
      let counts = this.getDownloadCounts(release);
      this.releaseData.push({
        releaseName: release.tag_name,
        mac: counts.mac,
        windows: counts.windows,
        linux: counts.linux,
        total: counts.total,
        autoUpdate: counts.autoUpdate,
        grandTotal: counts.grandTotal,
        publishedDate: release.created_at
      })
    })
  }


  getDownloadCounts(release: any): {
    mac: number,
    windows: number,
    linux: number,
    total: number,
    autoUpdate: number,
    grandTotal: number
  } {
    let mac: number = 0;
    let windows: number = 0;
    let linux: number = 0;
    let autoUpdate: number = 0;

    release.assets.forEach(asset => {
      if (asset.name.match('\.yml')) {
        autoUpdate = autoUpdate + asset.download_count;
      } else if (asset.name.match('\.AppImage')) {
        linux = linux + asset.download_count;
      } else if (asset.name.match('\.deb')) {
        linux = linux + asset.download_count;
      } else if (asset.name.match('\.dmg')) {
        mac = mac + asset.download_count;
      } else if (asset.name.match('\.tar\.gz')) {
        mac = linux + asset.download_count;
      } else if (asset.name.match('\.exe')) {
        windows = windows + asset.download_count;
      }
    });

    return {
      mac: mac,
      windows: windows,
      linux: linux,
      total: mac + windows + linux,
      autoUpdate: autoUpdate,
      grandTotal: mac + windows + linux + autoUpdate
    }
  }

}
