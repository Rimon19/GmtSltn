using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class OrderImageUploadTbl
    {
        public int OrderImgUploadId { get; set; }
        public int? InitialOrderId { get; set; }
        public string FileName { get; set; }
        public string FileSize { get; set; }
        public string ImgPath { get; set; }
    }
}
