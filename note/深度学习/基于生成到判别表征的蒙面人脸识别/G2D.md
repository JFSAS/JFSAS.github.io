# masked_face_detection with Genenerative-to-Discriminative Representations

[论文](2405.16761v1.pdf)

现在对于遮蔽脸部识别有两种主流的解决方案，分为生成式和识别式模型。

本篇论文的创新点在于把生成式模型和识别式模型连接了起来，形成了简称G2D的融合模型

G2D模型先由生成式模型的编码器产生注重类别信息的描述特征（category-aware descriptors），产生的特征输入到识别器模型中得到身份识别向量（identity-aware vectors）。

编码器和鉴别器作为神经网络的主干，输出的特征再给到一个分类器最终能够识别身份信息。

总的来说，G2D模型是由生成式编码器（generative encoder）、识别改装器（discriminative reformer ）、特征分类器（ Feature Classifier）顺序连接形成的模型，能够融合生成式和识别式模型的优点。

![image-20240807193205558](C:\Users\15402\AppData\Roaming\Typora\typora-user-images\image-20240807193205558.png)

> 首先，生成式编码器采用预训练好的人脸绘制模型的编码器，将被遮挡的人脸表示为具有丰富被遮挡人脸一般信息的类别感知描述符，以区分人脸与其他物体;然后，判别改造器结合了一个22层卷积网络，并学习将类别感知描述符转换为身份感知向量以增强识别。最后，特征分类器级联一个全连接层和一个softmax层来识别改造后的向量。该方法将生成式编码器和判别式重构器结合在一起，作为被遮挡人脸特征提取的主干，逐步进行自监督预训练，特征分类器作为识别头。最后，对骨架进行冻结，并对标记好的被遮挡面进行特征分类器的微调。
>
> 具有三个模型，分别为生产式编码器（人脸绘制模型的一部分），提取出人脸类别感知符的表征。判别改造器用卷积神经将感知符转换回身份识别向量来加强身份识别能力，最后将识别向量导入身份识别器。

![image-20240807195147332](C:\Users\15402\AppData\Roaming\Typora\typora-user-images\image-20240807195147332.png)

## 生成式编码器 （Generative Encoder)

### 生成式模型概念

生成式模型的思想是对遮挡部分进行重绘得到完整人脸，然后进行面部识别。

对于一般的生成式模型论文作者提出：

>  由于在忽视了正则化和身份保留，在图像填补时会丢失**内在和外在的识别关系**，一些试图加强身份信息保留的方法帮助有限的

即补全生成的图片身份识别效果不好。



相关论文:[Two-Stream_Prototype_Learning_Network_for_Few-Shot_Face_Recognition_Under_Occlusions.pdf](Two-Stream_Prototype_Learning_Network_for_Few-Shot_Face_Recognition_Under_Occlusions.pdf)

### G2D模型中的生成式编码器的选取

生成式编码器负责从被遮挡区域中提取一般的面部特征。

G2D模型中的编码器是ICT模型，一种最新的基于transfromer的图片补全模型。ICT模型包含一个transformer网络提取特征根和一个CNN网络上采样，G2D模型的编码器的输出特征来自于ICT模型上采样网络中的一个残差块。

[Wan, Z., Zhang, J., Chen, D., and Liao, J. High-fidelity pluralistic image completion with transformers. In ICCV, pp. 4692–4701, 2021.](https://openaccess.thecvf.com/content/ICCV2021/papers/Wan_High-Fidelity_Pluralistic_Image_Completion_With_Transformers_ICCV_2021_paper.pdf)

## 识别器重构器  (discriminative reformer )

### 识别器概念

通过减少遮蔽区的影响来提取鲁棒性特征。 一些论文想通过构建更加强大的神经网络来从未遮挡区域提取出更多的信息

作者提出：

> 1.直接微调现有的识别模型会增加对遮蔽脸的识别能力但会减少对未遮蔽脸的识别能力。
>
> 2.对于不同种类的遮蔽类型可能会导致鲁棒性弱的特点。即对于相同人脸不同口罩的识别缺少一致性。

相关论文：[Masked_Face_Transformer.pdf](Masked_Face_Transformer.pdf)

### G2D模型中选用的识别器

选用一个叫做Resnet-like的网络作为识别重构器，它由一个卷积层、4个残差块、一个池化层和一个全连接层组成。作者实验发现网络越深重构效果越好，但会大大增加模型复杂度。

在训练时以一个预训练的通用人脸识别器为老师，通过知识蒸馏来指导生成到判别表示的转换。

## 特征分类器

特征分类器从改进的判别表示中预测人脸身份。它表现为一个简单的分类头，具有一个完全连接的层和一个softmax层

## 识别结果评估

### 在人工合成遮蔽人脸训练集上

![image-20240807203301846](C:\Users\15402\AppData\Roaming\Typora\typora-user-images\image-20240807203301846.png)

对于ACC能够达到97.58%的准确率。

对于 FMR （false match rate （系统错误地将两种不同的输入认为是匹配的概率） ）和 FNMR （false match rate （系统错误地将两个匹配的输入认为是不匹配的概率））

G2D在FMR和FNMR之间实现了更好的平衡，换句话说，在未屏蔽和被屏蔽的面部上实现了更好的泛化。

### 在真实遮挡人脸上

![image-20240807205030136](C:\Users\15402\AppData\Roaming\Typora\typora-user-images\image-20240807205030136.png)

能达到79.18%的准确度

