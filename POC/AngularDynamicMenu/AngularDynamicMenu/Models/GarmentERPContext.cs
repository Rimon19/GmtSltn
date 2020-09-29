using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularDynamicMenu.Models
{
    public partial class GarmentERPContext : DbContext
    {
        public GarmentERPContext()
        {
        }

        public GarmentERPContext(DbContextOptions<GarmentERPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TAccessRight> TAccessRight { get; set; }
        public virtual DbSet<TAccessType> TAccessType { get; set; }
        public virtual DbSet<TAccessTypeCode> TAccessTypeCode { get; set; }
        public virtual DbSet<TRole> TRole { get; set; }
        public virtual DbSet<TRole2accessRight> TRole2accessRight { get; set; }
        public virtual DbSet<TUser> TUser { get; set; }
        public virtual DbSet<TUser2role> TUser2role { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Host=localhost;Database=GarmentERP;Username=postgres;Password=123");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TAccessRight>(entity =>
            {
                entity.HasKey(e => e.AccessRightId);

                entity.ToTable("t_access_right");

                entity.Property(e => e.AccessRightId)
                    .HasColumnName("access_right_id")
                    .HasMaxLength(20)
                    .ValueGeneratedNever();

                entity.Property(e => e.AccessType)
                    .IsRequired()
                    .HasColumnName("access_type")
                    .HasMaxLength(3);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(100);

                entity.Property(e => e.ParentAccessRightId)
                    .HasColumnName("parent_access_right_id")
                    .HasMaxLength(20);

                entity.Property(e => e.routepath)
                .HasColumnName("routepath")
                .HasMaxLength(20);
                
                entity.HasOne(d => d.ParentAccessRight)
                    .WithMany(p => p.InverseParentAccessRight)
                    .HasForeignKey(d => d.ParentAccessRightId)
                    .HasConstraintName("t_access_right_parent_access_right_id_fkey");
            });

            modelBuilder.Entity<TAccessType>(entity =>
            {
                entity.HasKey(e => e.AccessId);

                entity.ToTable("t_access_type");

                entity.Property(e => e.AccessId)
                    .HasColumnName("access_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.AccessType)
                    .HasColumnName("access_type")
                    .HasMaxLength(3);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TAccessTypeCode>(entity =>
            {
                entity.HasKey(e => e.AccessTypeId);

                entity.ToTable("t_access_type_code");

                entity.Property(e => e.AccessTypeId)
                    .HasColumnName("access_type_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.AccessType)
                    .IsRequired()
                    .HasColumnName("access_type")
                    .HasMaxLength(3);

                entity.Property(e => e.AccessTypeCode)
                    .IsRequired()
                    .HasColumnName("access_type_code")
                    .HasMaxLength(3);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TRole>(entity =>
            {
                entity.HasKey(e => e.RoleId);

                entity.ToTable("t_role");

                entity.Property(e => e.RoleId)
                    .HasColumnName("role_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.CreatedById).HasColumnName("created_by_id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("created_date")
                    .HasColumnType("date");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(100);

                entity.Property(e => e.EditedById).HasColumnName("edited_by_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TRole2accessRight>(entity =>
            {
                entity.HasKey(e => e.RoleAccessId);

                entity.ToTable("t_role2access_right");

                entity.Property(e => e.RoleAccessId)
                    .HasColumnName("role_access_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.AccessRightId)
                    .HasColumnName("access_right_id")
                    .HasMaxLength(20);

                entity.Property(e => e.AccessType)
                    .IsRequired()
                    .HasColumnName("access_type")
                    .HasMaxLength(3);

                entity.Property(e => e.AccessTypeCode)
                    .IsRequired()
                    .HasColumnName("access_type_code")
                    .HasMaxLength(3);

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.AccessRight)
                    .WithMany(p => p.TRole2accessRight)
                    .HasForeignKey(d => d.AccessRightId)
                    .HasConstraintName("t_role2access_right_access_right_id_fkey");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TRole2accessRight)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("t_role2access_right_role_id_fkey");
            });

            modelBuilder.Entity<TUser>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("t_user");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.CreatedById).HasColumnName("created_by_id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("created_date")
                    .HasColumnType("date");

                entity.Property(e => e.EditedById).HasColumnName("edited_by_id");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasColumnName("email_address")
                    .HasMaxLength(20);

                entity.Property(e => e.FName)
                    .IsRequired()
                    .HasColumnName("f_name")
                    .HasMaxLength(100);

                entity.Property(e => e.Fax)
                    .IsRequired()
                    .HasColumnName("fax")
                    .HasMaxLength(20);

                entity.Property(e => e.LName)
                    .IsRequired()
                    .HasColumnName("l_name")
                    .HasMaxLength(100);

                entity.Property(e => e.LastLoginDate)
                    .HasColumnName("last_login_date")
                    .HasColumnType("date");

                entity.Property(e => e.LastPasswordChangeDate)
                    .HasColumnName("last_password_change_date")
                    .HasColumnType("date");

                entity.Property(e => e.Login)
                    .IsRequired()
                    .HasColumnName("login")
                    .HasMaxLength(20);

                entity.Property(e => e.LoginTries)
                    .IsRequired()
                    .HasColumnName("login_tries")
                    .HasMaxLength(20);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasColumnName("phone")
                    .HasMaxLength(20);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<TUser2role>(entity =>
            {
                entity.HasKey(e => e.UserRoleId);

                entity.ToTable("t_user2role");

                entity.Property(e => e.UserRoleId)
                    .HasColumnName("user_role_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TUser2role)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("t_user2role_role_id_fkey");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TUser2role)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("t_user2role_user_id_fkey");
            });
        }
    }
}
