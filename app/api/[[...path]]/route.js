import { NextResponse } from 'next/server'

// Basic API routes for future functionality
export async function GET(request) {
  const { pathname } = new URL(request.url)
  
  // Health check endpoint
  if (pathname === '/api/health') {
    return NextResponse.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      service: 'Smart Kilid Sistemləri API'
    })
  }
  
  // Default response
  return NextResponse.json({ 
    message: 'Smart Kilid Sistemləri API',
    version: '1.0.0',
    endpoints: [
      '/api/health - Health check'
    ]
  })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { pathname } = new URL(request.url)
    
    // Contact form endpoint for future use
    if (pathname === '/api/contact') {
      // Basic validation
      const { name, phone, email, message } = body
      
      if (!name || !phone) {
        return NextResponse.json(
          { error: 'Ad və telefon nömrəsi tələb olunur' },
          { status: 400 }
        )
      }
      
      // Here you would typically save to database or send email
      // For now, just return success response
      return NextResponse.json({
        success: true,
        message: 'Müraciətiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.',
        data: { name, phone, email, message }
      })
    }
    
    return NextResponse.json(
      { error: 'Endpoint tapılmadı' },
      { status: 404 }
    )
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Server xətası' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function PUT(request) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE(request) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}