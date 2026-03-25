import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Profile, Project } from '../types'

interface PortfolioData {
  profile: Profile | null
  projects: Project[]
  loading: boolean
  error: string | null
}

export function usePortfolio(): PortfolioData {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const [profileResult, projectsResult] = await Promise.all([
          supabase.from('profiles').select('*').single(),
          supabase.from('projects').select('*').order('created_at', { ascending: false }),
        ])

        if (profileResult.error) throw profileResult.error
        if (projectsResult.error) throw projectsResult.error

        setProfile(profileResult.data)
        setProjects(projectsResult.data ?? [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { profile, projects, loading, error }
}
