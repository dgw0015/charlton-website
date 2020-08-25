import { Injectable} from '@angular/core';

@Injectable()
export class ScreenSizeService {
   width: any;
   isMobileDevice: any;

   get screenSize$(): number {
      return innerWidth;
   }

   constructor()  {
      this.width = innerWidth;
      if (innerWidth < 550)   {
         this.isMobileDevice = true;
      }
      this.isMobileDevice = false;
   }

   public getIsMobileDevice(): boolean {
      return this.isMobileDevice;
   }
}


