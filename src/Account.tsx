import React from 'react';
import './Account.css';
import { useAuth } from './AuthContext';

interface SubscriptionPlan {
  tier: 'free' | 'premium' | 'unlimited';
  name: string;
  description: string;
  price: number;
  messagesPerDay: number;
  features: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    tier: 'free',
    name: 'Free',
    description: 'Get started with basic messaging',
    price: 0.0,
    messagesPerDay: 10,
    features: [
      '10 messages per day',
      'Basic chat functionality',
      'Community support',
    ],
  },
  {
    tier: 'premium',
    name: 'Premium',
    description: 'More messages and enhanced features',
    price: 9.99,
    messagesPerDay: 100,
    features: [
      '100 messages per day',
      'Priority support',
      'Advanced chat features',
      'Export conversations',
    ],
  },
  {
    tier: 'unlimited',
    name: 'Unlimited',
    description: 'Unlimited everything for power users',
    price: 19.99,
    messagesPerDay: -1,
    features: [
      'Unlimited messages',
      'Premium support',
      'All features included',
      'Early access to new features',
      'Export conversations',
      'Custom themes',
    ],
  },
];

const Account: React.FC = () => {
  const { user, logout } = useAuth();

  const signOut = () => {
    logout();
  };

  const getPlanByTier = (tier: string): SubscriptionPlan => {
    return subscriptionPlans.find((plan) => plan.tier === tier) || subscriptionPlans[0];
  };

  const getTierColor = (tier: string): string => {
    switch (tier) {
      case 'free':
        return '#6b7280';
      case 'premium':
        return '#2563eb';
      case 'unlimited':
        return '#7c3aed';
      default:
        return '#6b7280';
    }
  };

  const getUsageColor = (usagePercent: number): string => {
    if (usagePercent < 0.5) return '#10b981';
    if (usagePercent < 0.8) return '#f59e0b';
    return '#ef4444';
  };

  const getUsageText = (usagePercent: number): string => {
    if (usagePercent < 0.5) return 'Great! You have plenty of messages left.';
    if (usagePercent < 0.8) return 'You\'re using your messages steadily.';
    if (usagePercent < 1.0) return 'Running low on messages.';
    return 'You\'ve used all your daily messages.';
  };

  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      signOut();
    }
  };

  if (!user) {
    return null; // This should not happen since App component handles redirects
  }

  const plan = getPlanByTier(user.tier);
  const isUnlimited = plan.messagesPerDay === -1;
  const usagePercent = isUnlimited 
    ? 0.0 
    : (plan.messagesPerDay - user.remainingMessages) / plan.messagesPerDay;

  return (
    <div className="account-container">
      <div className="account-header">
        <button 
          className="back-button" 
          onClick={() => window.location.hash = ''}
        >
          ← Back to Home
        </button>
        <h1>Account</h1>
      </div>

      <div className="account-content">
        {/* User Header Card */}
        <div className="account-card user-card">
          <div className="user-info">
            <div className="user-avatar">
              {user.picture ? (
                <img src={user.picture} alt="Profile" className="user-avatar-image" />
              ) : (
                <span>{user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}</span>
              )}
            </div>
            <div className="user-details">
              <h2>{user.displayName || 'User'}</h2>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Subscription Card */}
        <div className="account-card subscription-card">
          <div className="card-header">
            <div className="card-icon" style={{color: getTierColor(user.tier)}}>
              ⭐
            </div>
            <h3>Subscription</h3>
          </div>
          <div className="subscription-info">
            <div 
              className="tier-badge" 
              style={{
                backgroundColor: getTierColor(user.tier) + '1a',
                borderColor: getTierColor(user.tier),
                color: getTierColor(user.tier)
              }}
            >
              <span className="tier-icon">💎</span>
              {plan.name.toUpperCase()}
            </div>
            <p className="plan-description">{plan.description}</p>
            {!plan.price ? null : (
              <p className="plan-price">${plan.price.toFixed(2)}/month</p>
            )}
          </div>
        </div>

        {/* Usage Card */}
        <div className="account-card usage-card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h3>Daily Usage</h3>
          </div>
          <div className="usage-info">
            {isUnlimited ? (
              <div className="unlimited-usage">
                <div className="unlimited-icon">∞</div>
                <p className="unlimited-text">Unlimited Messages</p>
              </div>
            ) : (
              <div className="limited-usage">
                <div className="usage-stats">
                  <span className="usage-label">Messages Remaining</span>
                  <span className="usage-count">
                    {user.remainingMessages}/{plan.messagesPerDay}
                  </span>
                </div>
                <div className="usage-bar">
                  <div 
                    className="usage-fill" 
                    style={{
                      width: `${usagePercent * 100}%`,
                      backgroundColor: getUsageColor(usagePercent)
                    }}
                  ></div>
                </div>
                <p className="usage-text">{getUsageText(usagePercent)}</p>
              </div>
            )}
            <div className="reset-info">
              <span className="reset-icon">🔄</span>
              <span className="reset-text">Resets daily at midnight</span>
            </div>
          </div>
        </div>

        {/* Sign Out Card */}
        <div className="account-card signout-card">
          <div className="card-header">
            <div className="card-icon signout-icon">🚪</div>
            <h3>Sign Out</h3>
          </div>
          <div className="signout-info">
            <p className="signout-description">
              Sign out of your account and return to the home screen.
            </p>
            <button className="signout-button" onClick={handleSignOut}>
              <span className="signout-button-icon">🚪</span>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;