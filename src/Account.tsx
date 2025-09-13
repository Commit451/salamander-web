import React, { useEffect, useState } from 'react';
import './Account.css';
import { useAuth } from './AuthContext';
import Footer from './Footer';
import Header from './Header';
import { getPlansFromFirestore, Plan } from './services/userService';


const Account: React.FC = () => {
  const { user, logout, refreshUserData } = useAuth();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(true);

  useEffect(() => {
    // Load plans and refresh user data when component loads
    const loadData = async () => {
      try {
        const [plansData] = await Promise.all([
          getPlansFromFirestore(),
          refreshUserData()
        ]);
        setPlans(plansData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoadingPlans(false);
      }
    };
    
    loadData();
  }, [refreshUserData]);

  const signOut = () => {
    logout();
  };

  const getPlanById = (planId: string): Plan | null => {
    return plans.find((plan) => plan.id === planId) || null;
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

  if (isLoadingPlans) {
    return (
      <div className="account-container">
        <Header isSubpage={true} />
        <div className="account-content" style={{ paddingTop: '6rem' }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>
        </div>
      </div>
    );
  }

  const plan = getPlanById(user.tier);
  if (!plan) {
    return (
      <div className="account-container">
        <Header isSubpage={true} />
        <div className="account-content" style={{ paddingTop: '6rem' }}>
          <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
            Error: Plan not found
          </div>
        </div>
      </div>
    );
  }

  const isUnlimited = plan.messageLimit === -1;
  const usagePercent = isUnlimited 
    ? 0.0 
    : plan.messageLimit > 0 ? (plan.messageLimit - user.remainingMessages) / plan.messageLimit : 0;

  return (
    <div className="account-container">
      <Header isSubpage={true} />
      <div className="account-content" style={{ paddingTop: '6rem' }}>
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
            <p className="plan-description">{plan.tagline}</p>
            {plan.priceInCents === 0 ? null : (
              <p className="plan-price">${(plan.priceInCents / 100).toFixed(2)}/month</p>
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
                    {user.remainingMessages}/{plan.messageLimit}
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

        {/* Available Plans Card */}
        <div className="account-card plans-card">
          <div className="card-header">
            <div className="card-icon">💎</div>
            <h3>Available Plans</h3>
          </div>
          <div className="plans-list">
            {plans.map((planOption) => {
              const isCurrentPlan = planOption.id === user.tier;
              const planPrice = planOption.priceInCents === 0 ? 'Free' : `$${(planOption.priceInCents / 100).toFixed(2)}/month`;
              const messageText = planOption.messageLimit === -1 ? 'Unlimited messages' : `${planOption.messageLimit} messages per day`;
              
              return (
                <div 
                  key={planOption.id} 
                  className={`plan-option ${isCurrentPlan ? 'current-plan' : ''}`}
                  style={{
                    border: isCurrentPlan ? `2px solid ${getTierColor(planOption.id)}` : '1px solid #e5e7eb',
                    backgroundColor: isCurrentPlan ? getTierColor(planOption.id) + '0a' : 'transparent'
                  }}
                >
                  <div className="plan-header">
                    <div className="plan-name-price">
                      <h4 className="plan-name">{planOption.name}</h4>
                      <span className="plan-price-badge">{planPrice}</span>
                    </div>
                    {isCurrentPlan && (
                      <span className="current-badge" style={{ color: getTierColor(planOption.id) }}>
                        Current Plan
                      </span>
                    )}
                  </div>
                  <p className="plan-tagline">{planOption.tagline}</p>
                  <div className="plan-features">
                    <div className="plan-feature">
                      <span className="feature-icon">💬</span>
                      <span className="feature-text">{messageText}</span>
                    </div>
                    <div className="plan-feature">
                      <span className="feature-icon">🏃</span>
                      <span className="feature-text">{planOption.runnerLimit} runners</span>
                    </div>
                  </div>
                  {!isCurrentPlan && (
                    <button 
                      className="upgrade-button"
                      style={{ 
                        backgroundColor: getTierColor(planOption.id),
                        borderColor: getTierColor(planOption.id)
                      }}
                      onClick={() => {
                        // TODO: Implement plan upgrade functionality
                        alert('Plan upgrade functionality coming soon!');
                      }}
                    >
                      {planOption.priceInCents === 0 ? 'Downgrade' : 'Upgrade'} to {planOption.name}
                    </button>
                  )}
                </div>
              );
            })}
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
      <Footer />
    </div>
  );
};

export default Account;