using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TasksManager.Models
{
    public enum TaskStatus {DUE, DONE }

    public class Mission
    {
        public int Id { get; set; }
        
        [Required]
        public string Title { get; set; }

        [Required]
        public DateTime Due { get; set; }

        public TaskStatus taskStatus { get; set; } = TaskStatus.DUE;

        [Required]
        public int UserId { get; set; }

        public User _User { get; set; }
        
    }
}
