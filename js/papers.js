const papers = [
    {
        cite: "Chen S, Guo Z, Li X, et al. Query2Set: Single-to-Multiple Partial Fingerprint Recognition Based on Attention Mechanism[J]. IEEE Transactions on Information Forensics and Security, 2022, 17: 1243-1253. ", // 论文引用描述
        year: "2022", //日期
        type: "J", // Conference / Journal
        area: "CV", // RL(reinforcement learning), CV(computer vision), Others
        note: "JCR Q1", //文章说明
        paper: "https://ieeexplore.ieee.org/document/9733330", // 文章链接
        code: "", // 代码链接
        demo: "", // 展示链接
    },
    {
        cite: "R Yang, Y Lu, W Li, H Sun, M Fang, Y Du, X Li, et al. Rethinking Goal-conditioned Supervised Learning and Its Connection to Offline RL[C]. In Proceedings of the International Conference on Learning Representations (ICLR-22), 2022.",
        year: "2022",
        type: "C", 
        area: "RL", 
        note: "THU-A",
        paper: "https://openreview.net/forum?id=KJztlfGPdwW",
        code: "https://github.com/YangRui2015/AWGCSL",
        demo: "",
    },
    {
        cite: "J Yan, H Chen, K Wang, Y Ji, Y Zhu, J Li, D Xie, Z Xu, J Huang, S Cheng, X Li, J Yao, Hierarchical attention guided framework for multi-resolution collaborative whole slide image segmentation[C]. In Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI-21), 2021: 153-163.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "https://link.springer.com/chapter/10.1007/978-3-030-87237-3_15",
        code: "",
        demo: "",
    },
    {
        cite: "Yan J, Chen H, Li X, et al. Deep contrastive learning based tissue clustering for annotation-free histopathology image analysis[J]. Computerized Medical Imaging and Graphics, 2022, 97: 102053.",
        year: "2022",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "Mazandarani M, Li X. Interval type-2 fractional fuzzy inference systems: Towards an evolution in fuzzy inference systems[J]. Expert Systems with Applications, 2022, 189: 115947.",
        year: "2022",
        type: "J", 
        area: "Others", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "Li S, Li X, Lu J, Zhou J; Structure-adaptive Neighborhood Preserving Hashing for Scalable Video Search, IEEE Transactions on Circuits and Systems for Video Technology, 2021",
        year: "2021",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "Xu Z, Luo J, Yan J, Li X, et al. F3RNet: full-resolution residual registration network for deformable image registration[J]. International Journal of Computer Assisted Radiology and Surgery, 2021, 16(6): 923-932.",
        year: "2021",
        type: "J", 
        area: "CV", 
        note: "JCR Q2",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Hao R, Lu B, Cheng Y, Li X, et al. A steel surface defect inspection approach towards smart industrial monitoring[J]. Journal of Intelligent Manufacturing, 2021, 32(7): 1833-1843.",
        year: "2021",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Zhang Y, Liu Y, Jiang S, Dixit K, Song P, Zhang X, Ji X, Li X , Neural network model assisted Fourier ptychography with Zernike aberration recovery and total variation constraint., Journal of Biomedical Optics, 2021, 26(3) : 036502",
        year: "2021",
        type: "J", 
        area: "CV", 
        note: "JCR Q2",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li, S., Li, X., Lu, J., & Zhou, J. Self-supervised video hashing via bidirectional transformers. [C] In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-21) 2021:13549-13558.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Wang Z, Zhou L, Wang L, Li X. A Self-boosting Framework for Automated Radiographic Report Generation. [C] In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-21), 2021, 2433-2442.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Ma, L., Wang, T., Dong, B., Yan, J., Li, X., Zhang, X. Implicit Feature Refinement for Instance Segmentation. [C] In Proceedings of the 29th ACM International Conference on Multimedia (ACMMM-21) 2021, 3088-3096.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Xu, Z, Lu D, Wang Y, Luo J, Jayender J, Ma K, Zheng Y, Li X. Noisy labels are treasure: mean-teacher-assisted confident learning for hepatic vessel segmentation. [C] In Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI-21), 2021, 3-13.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "J Yan, H Chen, K Wang, Y Ji, Y Zhu, J Li, D Xie, Z Xu, J Huang, S Cheng, X Li, J Yao, Hierarchical attention guided framework for multi-resolution collaborative whole slide image segmentation[C]. In Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI-21), 2021: 153-163.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Yu B, Li W, Li X, et al. Frequency-aware spatiotemporal transformers for video inpainting detection. [C] In Proceedings of the IEEE International Conference on Computer Vision (ICCV-21). 2021: 8188-8197.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Xu Z, Yan J, Luo J, Li X, et al. Unsupervised multimodal image registration with adaptative gradient guidance[C] In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP-21). IEEE, 2021: 1225-1229.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-B",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Ma L, Dong B, Yan J, et al. Matting enhanced mask R-CNN[C] In Proceedings of the 2021 IEEE International Conference on Multimedia and Expo (ICME-21). IEEE, 2021: 1-6.",
        year: "2021",
        type: "C", 
        area: "CV", 
        note: "THU-B",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Liu Y, Gu K, Li X, et al. Blind image quality assessment by natural scene statistics and perceptual characteristics[J]. ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM), 2020, 16(3): 91-111. ",
        year: "2020",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li S, Chen Z, Li X, Lu J, Zhou J. Unsupervised variational video hashing with 1d-cnn-lstm networks[J]. IEEE Transactions on Multimedia, 2020, 22(6): 1542-1554",
        year: "2020",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Liu Y, Gu K, Zhang Y, Li X, Zhai G, Zhao D, Gao W, Unsupervised Blind Image Quality Evaluation via Statistical Measurements of Structure, Naturalness, and Perception, IEEE Transactions on Circuits and Systems for Video Technology, 2020, 30(4): 929-943",
        year: "2020",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Yan J, Chen S, Zhang Y, Li X, et al. Neural Architecture Search for compressed sensing Magnetic Resonance image reconstruction[J]. Computerized Medical Imaging and Graphics, 2020, 85: 101784.",
        year: "2020",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Xu Z, Luo J, Yan J, Li X,et al. Adversarial uni-and multi-modal stream networks for multimodal image registration. [C] In Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI-20). ",
        year: "2020",
        type: "C", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li X, Qi H, Jiang S, et al. Quantitative phase imaging via a cGAN network with dual intensity images captured under centrosymmetric illumination[J]. Optics Letters, 2019, 44(11): 2879-2882.",
        year: "2019",
        type: "C", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li S, Chen Z, Li X, et al. Unsupervised variational video hashing with 1D-CNN-LSTM networks [J]. IEEE Transactions on Multimedia, 2019, 22(6): 1542-1554.",
        year: "2019",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li X, Fan Z, Liu Y, et al. 3D pose detection of closely interactive humans using multi-view cameras[J]. Sensors, 2019, 19(12): 2831.",
        year: "2019",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li X, Jin K, Long R. End-to-end semantic-aware object retrieval based on region-wise attention[J]. Neurocomputing, 2019, 359: 219-226.",
        year: "2019",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li X, Qi H, Jiang S, et al. Quantitative phase imaging via a cGAN network with dual intensity images captured under centrosymmetric illumination [J]. Optics Letters, 2019, 44(11): 2879-2882.",
        year: "2019",
        type: "J", 
        area: "CV", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Li, S; Li X, et al ; Neighborhood preserving hashing for scalable video retrieval. [C] In Proceedings of the IEEE International Conference on Computer Vision (ICCV-19), 2019, 8211:8220.",
        year: "2019",
        type: "C", 
        area: "CV", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },   
    {
        cite: "Yu B, Lu J, Li X, Zhou J; Salience-Aware Face Presentation Attack Detection via Deep Reinforcement Learning，IEEE Transactions on Information Forensics and Security, 2022 vol.17: 413-427",
        year: "2022",
        type: "J", 
        area: "RL", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "R Yang, Y Lu, W Li, H Sun, M Fang, Y Du, X Li, et al. Rethinking Goal-conditioned Supervised Learning and Its Connection to Offline RL[C].",
        year: "2022",
        type: "C", 
        area: "RL", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "Li X, Zhang X, Li X, et al. BEAR-H: An Intelligent Bilateral Exoskeletal Assistive Robot for Smart Rehabilitation[J]. IEEE Robotics & Automation Magazine, 2021.",
        year: "2022",
        type: "C", 
        area: "Others", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "Mo Y, Wu Q, Li X, et al. Remaining useful life estimation via transformer encoder enhanced by a gated convolutional unit[J]. Journal of Intelligent Manufacturing, 2021: 1-10.",
        year: "2022",
        type: "J", 
        area: "Others", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },    
    {
        cite: "Zhang F, Tang X, Li X, et al. Quantifying cloud elasticity with container-based autoscaling[J]. Future Generation Computer Systems, 2019, 98: 672-681.",
        year: "2019",
        type: "J", 
        area: "Others", 
        note: "JCR Q1",
        paper: "",
        code: "",
        demo: "",
    },
    {
        cite: "5.	Lyu, J., Ma, X., Yan, J., Li, X. Efficient continuous control with double actors and regularized critics. [C] In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI-22), 2022.",
        year: "2019",
        type: "C", 
        area: "Others", 
        note: "THU-A",
        paper: "",
        code: "",
        demo: "",
    }
]