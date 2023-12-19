const Lead = require('../models/leadModel');

exports.getLeads = async (req, res, next) => {
    const leads = await Lead.find();

    res.status(200).json({
        status: 'Success',
        results: leads.length,
        data: {
            leads
        }
    })
};

exports.createLead = async (req, res, next) => {
        const lead = await Lead.create(req.body);
    
        res.status(201).json({
            status: 'success',
            lead
        });
}

exports.updateLead = async (req, res, next) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(
          req.params.id,
          req.body, // Assuming req.body contains the updated lead data
          { new: true, runValidators: true } // To return the updated lead and run validators
        );
    
        if (!updatedLead) {
          return res.status(404).json({ status: 'error', message: 'No Lead Found' });
        }
    
        res.status(200).json({
          status: 'success',
          lead: updatedLead
        });
      } catch (error) {
        // Handle any potential errors
        return res.status(500).json({ status: 'error', message: error.message });
      }
    };


exports.deleteLead = async(req, res, next) => {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if(!lead) {
        return next('No Lead found', 404);
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};

exports.deleteAllLeads = async (req, res, next) => {
    try {
      const deletedLeads = await Lead.deleteMany({}); // Delete all leads
  
      if (deletedLeads.deletedCount === 0) {
        return res.status(404).json({
          status: 'error',
          message: 'No leads found to delete',
        });
      }
  
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (error) {
      return next(error); // Pass any encountered error to the error handling middleware
    }
  };