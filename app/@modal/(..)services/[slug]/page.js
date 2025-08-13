'use client'
import Modal from '@/components/Modal'
import ServiceContent, { getService } from '@/components/ServiceContent'

export default function ServiceModal({ params }) {
  const item = getService(params.slug)
  const title = item ? item.title : 'Xidmət'
  return (
    <Modal title={title}>
      <ServiceContent slug={params.slug} />
    </Modal>
  )
}
