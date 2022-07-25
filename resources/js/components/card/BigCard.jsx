import React from 'react'
import { createRoot } from 'react-dom/client'

const BigCard = () => {
  return (
    <div>

    </div>
  )
}

export default BigCard
if (document.getElementById('big-card')) {
    const root = createRoot(document.getElementById('big-card'));
    root.render(<BigCard />);
}