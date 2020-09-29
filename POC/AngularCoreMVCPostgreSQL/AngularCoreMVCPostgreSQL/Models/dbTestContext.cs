using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularCoreMVCPostgreSQL.Models
{
    public partial class dbTestContext : DbContext
    {
        public dbTestContext()
        {
        }

        public dbTestContext(DbContextOptions<dbTestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<OrderMaster> OrderMaster { get; set; }
        public virtual DbSet<Studentdetails> Studentdetails { get; set; }
        public virtual DbSet<StudentMasters> StudentMasters { get; set; }
        public virtual DbSet<Tblemployee> Tblemployee { get; set; }
        public virtual DbSet<ProductImage> ProductImage { get; set; }

        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //                optionsBuilder.UseNpgsql("Host=localhost;Database=dbTest;Username=postgres;Password=123");
        //            }
        //        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderMaster>(entity =>
            {
                entity.HasKey(e => e.AutoId);

                entity.Property(e => e.AutoId)
                    .HasColumnName("AutoID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Desc).HasMaxLength(200);

                entity.Property(e => e.OrderDate).HasColumnType("date");

                entity.Property(e => e.OrderNo).HasMaxLength(50);
            });

            modelBuilder.Entity<Studentdetails>(entity =>
            {
                entity.HasKey(e => e.Stddtlid);

                entity.ToTable("studentdetails");

                entity.Property(e => e.Stddtlid)
                    .HasColumnName("stddtlid")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.Grade)
                    .IsRequired()
                    .HasColumnName("grade")
                    .HasMaxLength(10);

                entity.Property(e => e.Major)
                    .IsRequired()
                    .HasColumnName("major")
                    .HasMaxLength(100);

                entity.Property(e => e.Stdid).HasColumnName("stdid");

                entity.Property(e => e.Term)
                    .IsRequired()
                    .HasColumnName("term")
                    .HasMaxLength(30);

                entity.Property(e => e.Year)
                    .IsRequired()
                    .HasColumnName("year")
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<StudentMasters>(entity =>
            {
                entity.HasKey(e => e.StdId);

                entity.Property(e => e.StdId)
                    .HasColumnName("StdID")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.StdName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tblemployee>(entity =>
            {
                entity.HasKey(e => e.Employeeid);

                entity.ToTable("tblemployee");

                entity.Property(e => e.Employeeid).HasColumnName("employeeid");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasColumnName("city")
                    .HasMaxLength(20);

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasColumnName("department")
                    .HasMaxLength(20);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasColumnName("gender")
                    .HasMaxLength(6);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(20);
            });
            modelBuilder.Entity<ProductImage>(entity =>
            {
                entity.HasKey(e => e.FileUploadId);

                entity.ToTable("ProductImage");

                entity.Property(e => e.FileUploadId).HasColumnName("FileUploadId");

                entity.Property(e => e.FileName)
                    .IsRequired()
                    .HasColumnName("FileName")
                    .HasMaxLength(100);

                entity.Property(e => e.FileSize)
                    .IsRequired()
                    .HasColumnName("FileSize")
                    .HasMaxLength(100);

                entity.Property(e => e.ImagePath)
                    .IsRequired()
                    .HasColumnName("ImagePath")
                    .HasMaxLength(200);

                entity.Property(e => e.ProductId)
                    .IsRequired()
                    .HasColumnName("ProductId")
                    .HasMaxLength(20);
            });
        }
    }
}
