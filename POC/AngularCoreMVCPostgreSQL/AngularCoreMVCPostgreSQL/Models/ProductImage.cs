using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreMVCPostgreSQL.Models
{
    public class ProductImage
    {
        public int FileUploadId { get; set; }
        public string FileName { get; set; }
        public string FileSize { get; set; }
        public string ImagePath { get; set; }
        public string ProductId { get; set; }
    }
}
