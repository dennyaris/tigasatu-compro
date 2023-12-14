import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship'
export type EmploymentUnit = 'cardio' | 'dental' | 'diabetic' | 'technology'
export type JobLocationType = 'remote' | 'on-site' | 'hybrid'

export interface CareerParsedContent extends MarkdownParsedContent {
  employmentType: EmploymentType
  employmentUnit: EmploymentUnit
  jobLocationType: JobLocationType
  jobLocation: string
}
