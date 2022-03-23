
//import _ as fs from "fs";
// Error knowing type Img
const maxSize = 700;
const width = 100;
const height=250;
  function resizeImage(imageToProceed: string) {

        const A_Height = height;
        const A_Width = width;
        
        let R = 1;
        if (A_Height <=A_Width) {
          R = A_Height / maxSize;
        } else if (A_Height >A_Width) {
          
          R = A_Width / maxSize;
        }
        const newWidth = Math.round(A_Width / R);
        const newHeight = Math.round(A_Height / R);
        
        const Dirc = 'src/direc';
        const dir = 'src/direc/img'; 
        if (!fs.existsSync(dir)) { 
          fs.mkdirSync(dir); 
        }
  
        return Image;

  }