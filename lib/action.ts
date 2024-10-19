'use server'

interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  businessEmail: string;
  description: string;
  agree: boolean;
}

export async function submitContactForm(formData: ContactFormData) {

    // console.log(formData)
  try {
    const { agree, ...apiData } = formData;

    const response = await fetch('http://173.249.0.212:5006/submit_form_cogninest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: apiData.name,
        business_name: apiData.businessName,
        phone: apiData.phone,
        business_email: apiData.businessEmail,
        description: apiData.description,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'An error occurred while submitting the form' };
  }
}