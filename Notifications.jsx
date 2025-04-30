import { useEffect, useState } from 'react';

export default function Notifications() {
  const [notify, setNotify] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const platforms = ['Email', 'SMS', 'WhatsApp'];

  function handleToggle() {
    setNotify(prev => !prev);
  }

  function handlePlatform(e) {
    setSelectedPlatform(e.target.value);
  }

  // Log notification toggle
  useEffect(() => {
    console.log(notify ? 'Notifications Enabled!' : 'Notifications Disabled');
  }, [notify]);

  // Simulate save preference with cleanup
  useEffect(() => {
    if (!selectedPlatform) return;

    console.log('Saving preference...');
    const timer = setTimeout(() => {
      console.log('Preference saved');
    }, 2000);

    return () => {
      clearTimeout(timer);
      console.log('Cancelled previous request');
    };
  }, [selectedPlatform]);

  // Unmount cleanup
  useEffect(() => {
    return () => {
      console.log('Unsubscribed from notification service');
    };
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h3>Do you wish to be notified?</h3>
      <label>
        <input type="checkbox" onChange={handleToggle} checked={notify} />
        Yes
      </label>

      <br /><br />

      {notify && (
        <>
          <label>Select Platform: </label>
          <select onChange={handlePlatform} value={selectedPlatform}>
            <option value="">-- Select Platform --</option>
            {platforms.map((platform, index) => (
              <option key={index} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          {selectedPlatform && (
            <p style={{ marginTop: '1rem' }}>
              You selected: <strong>{selectedPlatform}</strong>
            </p>
          )}
        </>
      )}
    </div>
  );
}