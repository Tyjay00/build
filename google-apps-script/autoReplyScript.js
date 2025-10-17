/**
 * AWS Builder Labs - Custom Email Auto-Reply Script
 * This script sends a personalized welcome email when someone submits the form
 */

function onFormSubmit(e) {
  try {
    // Get form response data
    const formResponse = e.response;
    const itemResponses = formResponse.getItemResponses();
    
    // Extract email and name from form responses
    let email = '';
    let name = '';
    
    // Loop through responses to find email and name
    for (let i = 0; i < itemResponses.length; i++) {
      const item = itemResponses[i];
      const question = item.getItem().getTitle().toLowerCase();
      const answer = item.getResponse();
      
      if (question.includes('email')) {
        email = answer;
      }
      if (question.includes('name') || question.includes('first')) {
        name = answer;
      }
    }
    
    // If no name found, use a default greeting
    if (!name) {
      name = 'AWS Learning Enthusiast';
    }
    
    // Send personalized email
    if (email) {
      sendWelcomeEmail(email, name);
    }
    
  } catch (error) {
    console.log('Error in onFormSubmit: ' + error.toString());
  }
}

function sendWelcomeEmail(email, name) {
  const subject = 'Welcome to AWS Builder Labs - Your Cloud Journey Starts Here!';
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00D084, #232F3E); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #00D084; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 10px 5px; font-weight: bold; }
        .feature { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #00D084; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome ${name}!</h1>
          <p>You're now part of the AWS Builder Labs community</p>
        </div>
        
        <div class="content">
          <h2>Your Cloud Journey Starts Now!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for joining our <strong>FREE AWS Builder Labs</strong>! You've just taken the first step toward mastering cloud technologies without any cost barriers.</p>
          
          <div class="feature">
            <h3>What You Get:</h3>
            <ul>
              <li><strong>10 Free Hands-On Labs</strong> - Real AWS environment, no simulation</li>
              <li><strong>Live Guided Sessions</strong> - Interactive learning with expert instructors</li>
              <li><strong>No Credit Card Required</strong> - Completely free, no hidden costs</li>
              <li><strong>Beginner Friendly</strong> - Perfect for all skill levels</li>
            </ul>
          </div>
          
          <h3>Next Steps:</h3>
          <p>Get started with these resources:</p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://skillbuilder.aws/learning-plan/JE1AJBF5ZP/introduction-to-aws-cloud-builder-labs-learning-plan" class="button">
              Access Learning Plan
            </a>
            <a href="https://build.tyrone.studio" class="button">
              Visit Our Website
            </a>
          </div>
          
          <div class="feature">
            <h3>Live Session Schedule:</h3>
            <p>Join our upcoming guided sessions where you'll get hands-on help from AWS experts. We'll send you session details and calendar invites soon!</p>
          </div>
          
          <h3>Pro Tips to Get Started:</h3>
          <ol>
            <li>Create your free AWS Skill Builder account</li>
            <li>Complete the introduction module first</li>
            <li>Join our community discussions</li>
            <li>Practice regularly - even 30 minutes daily makes a difference!</li>
          </ol>
          
          <div class="feature">
            <p><strong>Questions?</strong> Reply to this email or visit our website at <a href="https://build.tyrone.studio">build.tyrone.studio</a></p>
          </div>
        </div>
        
        <div class="footer">
          <p>Ready to unlock your cloud future? Let's build something amazing together!</p>
          <p><small>AWS Builder Labs | Free Cloud Training | build.tyrone.studio</small></p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  const plainTextBody = `
Welcome ${name}!

Thank you for joining AWS Builder Labs - your FREE path to cloud mastery!

Next Steps:
• Access the learning plan: https://skillbuilder.aws/learning-plan/JE1AJBF5ZP/introduction-to-aws-cloud-builder-labs-learning-plan
• Visit our website: https://build.tyrone.studio

What You Get:
• 10 Free Hands-On Labs
• Real AWS Environment
• Live Guided Sessions
• No Credit Card Required

We'll send you live session details soon. Get ready to unlock your cloud future!

Questions? Reply to this email or visit build.tyrone.studio

Best regards,
The AWS Builder Labs Team
  `;
  
  try {
    GmailApp.sendEmail(
      email,
      subject,
      plainTextBody,
      {
        htmlBody: htmlBody,
        name: 'AWS Builder Labs Team'
      }
    );
    console.log('Welcome email sent to: ' + email);
  } catch (error) {
    console.log('Error sending email to ' + email + ': ' + error.toString());
  }
}

/**
 * Installation Instructions:
 * 1. Open your Google Form
 * 2. Click the 3 dots menu → Script editor
 * 3. Delete any existing code and paste this script
 * 4. Save the project (Ctrl+S)
 * 5. Set up trigger: Triggers → Add Trigger → Choose onFormSubmit → From form → On form submit
 * 6. Authorize the script when prompted
 * 7. Test by submitting your form!
 */