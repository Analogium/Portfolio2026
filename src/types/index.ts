export interface Profile {
  id: string
  name: string
  title: string
  bio: string
  avatar_url: string | null
  github_username: string
  linkedin_url: string | null
  email: string
  location: string | null
  skills_by_category: {
    frontend: string[]
    backend: string[]
    devops: string[]
  }
  cv_url: string | null
  cv_file_url: string | null
  phone_number: string | null
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  description: string
  image_url: string | null
  github_url: string
  live_url: string | null
  technologies: string[]
  created_at: string
  updated_at: string
}

export interface Experience {
  id: string
  profile_id: string
  company: string
  position: string
  description: string
  start_date: string
  end_date: string | null
  created_at: string
  updated_at: string
}

export interface Education {
  id: string
  profile_id: string
  school: string
  degree: string
  field: string
  start_date: string
  end_date: string | null
  created_at: string
  updated_at: string
}
